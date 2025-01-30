import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const textoEditor = document.getElementById('editor-texto');
const titluoDocumento = document.getElementById('titulo-documento');

titluoDocumento.textContent = nomeDocumento || "Documento sem título"; 

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor({
        texto: textoEditor.value, 
        nomeDocumento
    })
})

function atualizaTextoEditor(texto) {
    textoEditor.value = texto
}

export { atualizaTextoEditor }

