var http = require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('<center><h1>My Home Page </h1></center>');
    var a =20;
    var b = 10;
    var c = (a-b);
    var d = (a+b);
    var e = (a*b);
    var f = (a/b);
    var g = (a%b);
    
    res.write('<hr/>')
    res.write('<p> Value of c ( a - b ) : ' + c + '</p>')
    res.write('<p> Value of d ( a + b ) : ' + d + '</p>')
    res.write('<p> Value of e ( a * b ) : ' + e + '</p>')
    res.write('<p> Value of f ( a / b ) : ' + f + '</p>')
    res.write('<p> Value of g ( a % b ) : ' + g + '</p>')
    res.write('<hr/>')
    res.write('<table border = 1 cellspacing = 0  cellpadding= 10>')
    res.write('<tr><th>operations</th><th>Values</th></tr>')
    res.write(`<tr><td>c ( a - b )</td><td>${c}</td></tr>`)
    res.write(`<tr><td>d ( a + b )</td><td>${d}</td></tr>`)
    res.write(`<tr><td>e ( a * b )</td><td>${e}</td></tr>`)
    res.write(`<tr><td>f ( a / b )</td><td>${f}</td></tr>`)
    res.write(`<tr><td>g ( a % b )</td><td>${g}</td></tr>`)
    res.write('</table>')
    
})
.listen(4000)