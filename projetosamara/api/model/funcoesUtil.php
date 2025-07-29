<?php
    declare(strict_types=1);

    function getConexao():PDO{
        header("Content-Type: application/json; charset=utf-8");

        $dsn = "mysql:host=localhost;dbname=teste;charset=utf8";
        $op = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_PERSISTENT => true
        ];

        $pdo = null;
        try{
            $pdo = new PDO($dsn, 'root', '', $op);
        }catch(PDOException $e){
            http_response_code( 500 );//Erro de servidor(500) ou domínio(400)
            die( json_encode( ["erro ao conectar com o BD. {$e->getMessage()}"] ) );
        }
        return $pdo;
    }
?>