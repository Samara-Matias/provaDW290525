<?php
    require_once('../model/funcoesProdutoBD.php');
    $registros = $listar();

    http_response_code( 200 );//Sucesso via get
    die( json_encode( $registros ) );
?>
