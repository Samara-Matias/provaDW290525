<?php
    require_once('funcoesUtil.php');
    $pdo = getConexao();

    $listar = function () use ($pdo):array {
        $linhas = [];
        try{
            $sql = 'SELECT id, descricao, preco_de_custo AS precoDeCusto FROM produto';

            $stmt = $pdo->prepare($sql);
            $stmt->execute();

            $linhas = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }catch(PDOException $e) {
            http_response_code(400);
            json_encode( ["Erro ao pegar os dados no banco de dados. {$e->getMessage()}"] );
        }
        return $linhas;
    };

    $inserir = function (array $input) use ($pdo) {
        try{
            $sql = 'INSERT INTO produto (descricao, preco_de_custo) VALUES (:PDESC, :PCUSTO)';

            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':PDESC', $input['descricao']);
            $stmt->bindParam(':PCUSTO', $input['precoDeCusto']);

            $stmt->execute();

            return intval($pdo->lastInsertId());
        }catch(PDOException $e){
            if($e->getCode() == '23000'){
                http_response_code( 409 );
                die( ["Produto já inserido no banco de dados. {$e->getMessage()}"] );
            }
            http_response_code( 400 );
            die( ["Erro ao inserir o produto no banco de dados. {$e->getMessage()}"] );
        }
    };
?>

