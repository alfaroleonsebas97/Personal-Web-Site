let page = document.getElementsByTagName("main")[0].id;
switch (page) {
    case 'index':
        document.getElementById("index").classList.add("active");
        break;
    case 'misobjetivos':
        document.getElementById("misobjetivos").classList.add("active");
        break;
    case 'computacion':
        document.getElementById("computacion").classList.add("active");
        break;
    case 'pasatiempos':
        document.getElementById("pasatiempos").classList.add("active");
        break;
    case 'acercadeestesitio':
        document.getElementById("acercadeestesitio").classList.add("active");
        break;
    case 'cantactame':
        document.getElementById("cantactame").classList.add("active");
        break;
}
