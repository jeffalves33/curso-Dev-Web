<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

        <title>Formulario-Laravel</title>

    </head>
    <body>
        <div class="container">
            <div class="row">
                <h1>Catálogo de produtos</h1>
            </div>
            
            <div class="row">
                <div class="col-md-4">
                    <form role="form" action="resultado" method="get">
                        <div class="form-group">
                            <label for="Produto">Nome do protudo:</label>
                            <select class="form-control" name="id_produto">
                                <option value="1">Cadeira</option>
                                <option value="2">Fogão</option>
                                <option value="3">Roteador</option>
                                <option value="4">TV 30</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Ver detalhes</button>
                    </form>
                </div>

                <div class="col-md-4"></div>
                <div class="col-md-4"></div>
            </div>

        </div>
    </body>

    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

</html>
