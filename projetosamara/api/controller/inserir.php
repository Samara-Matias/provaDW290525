<?php
    require_once('../model/funcoesProdutoBD.php');

    $input = json_decode(file_get_contents('php://input'),true);
    if( ! isset( $input['descricao']) || ! isset( $input['precoDeCusto']) || $input['precoDeCusto'] ===''){
        http_response_code( 400 );//Erro de domínio
        die( json_encode( ['Alguma informação não foi enviada.'] ) );
    }

    if( $inserir( $input ) > 0 ){
        http_response_code( 201 );//INSERT bem sucedido.
        die( json_encode( ['Registro inserido com sucesso!'] ) );
    }
?>

