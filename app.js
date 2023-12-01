var http = require('http');
var formidable = require('formidable');
var fs = require('fs'); //fs = filesystem
var mv = require('mv'); //mv = move

http.createServer(function (req, res) {

if (req.url == '/fileupload') {

    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

    var oldpath = files.fleuptoupload.filepath;
    var newpath = '.' + files.filetoupload.originalFilename;

    mv(oldpath, newpath, function (err) {
        if (err)
            throw err;
        else {
           res.write('Archivo subido y movido');
           res.end(); 
        }
    });
});
    
} else if (req.url == '/sergio' ) {

    //PONER EL FORMULARIO O PAGINA WEB DA IGUAL LA RUTA TODO PASARIA POR AQUI

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> prueba iaw </h1>');
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();

}

else if (req.url == '/manolo' ) {

    //PONER EL FORMULARIO O PAGINA WEB DA IGUAL LA RUTA TODO PASARIA POR AQUI

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1> Manolo </h1>');
    return res.end();

}

}).listen(8080);