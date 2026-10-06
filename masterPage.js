// Velo by Wix - masterPage.js (Executado em todas as páginas do site)
// Código Oficial Marcão do Povo

$w.onReady(function () {
    console.log("Site Oficial Marcão do Povo carregado com sucesso!");

    // Configuração do WhatsApp Comercial
    const whatsappNumero = "5511943271522";
    const whatsappMensagem = encodeURIComponent("Olá, vim pelo site marcaodopovo.com e gostaria de saber mais");
    const whatsappUrl = `https://wa.me/${whatsappNumero}?text=${whatsappMensagem}`;

    // Caso exista botão com ID whatsappBtn ou wppFlutuante no Wix
    if ($w('#whatsappBtn')) {
        $w('#whatsappBtn').onClick(() => {
            wixLocation.to(whatsappUrl);
        });
    }

    if ($w('#btnComercial')) {
        $w('#btnComercial').onClick(() => {
            wixLocation.to(whatsappUrl);
        });
    }
});
