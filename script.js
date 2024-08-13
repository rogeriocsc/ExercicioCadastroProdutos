class Produto {
    constructor(nome,tipo) {
        this.nome = nome
        this.tipo = tipo
        this.categoria = "Eletrônicos"
        this.marca = "C3Tech"
        this.cor = "Azul"
        this.garantia=true
        this.estoque = 10
    }

    getNome() {
        return this.nome
    }

    getTipo() {
        return this.tipo
    }

    getCategoria() {
        return this.categoria
    }

    getMarca() {
        return this.marca
    }

    getCor() {
        return this.cor
    }

    getGarantia() {
        return this.garantia
    }

    getEstoque() {
        return this.estoque
    }

    setNome(nome) {
        this.nome = nome
    }

    setTipo(tipo) {
        this.tipo = tipo
    }

    setCategoria(categoria) {
        this.categoria = categoria
    }

    setMarca(marca) {
        this.marca = marca
    }

    setCor(cor) {
        this.cor = cor
    }

    setGarantia(garantia) {
        this.garantia = garantia
    }

    setEstoque(estoque) {
        this.estoque = estoque
    }
    // Métodos Básicos
    
    info() {
        res.innerHTML+=(`Produto: ${this.nome}<br>`)
        res.innerHTML+=(`Tipo: ${this.tipo}<br>`)
        res.innerHTML+=(`Categoria: ${this.categoria}<br>`)
        res.innerHTML+=(`Marca: ${this.marca}<br>`)
        res.innerHTML+=(`Cor: ${this.cor}<br>`)
        res.innerHTML+=(`Garantia: ${this.garantia}<br>`)
        res.innerHTML+=(`Estoque: ${this.estoque}<br>`)
        res.innerHTML+=("--------------------------- <br>")
    }
}

const res = document.querySelector("#resposta")
let prod1 = new Produto("Caixa de Som","Periféricos")
let prod2 = new Produto("Fone de Ouvido","Periféricos")
let prod3 = new Produto("Memória RAM","Hardware")
let prod4 = new Produto("Notebook","Laptop")
let prod5 = new Produto("Gabinete","PC")

const configuracao=()=>{
    prod1.info()
    prod2.setCor("Preto")
    prod2.setEstoque(5)
    prod2.info()
    prod3.setMarca("Kingston")
    prod3.setCor("Vermelho")
    prod3.info()
    prod4.setMarca("Lenovo")
    prod4.setCor("Preto")
    prod4.setEstoque(2)
    prod4.info()
    prod5.setCor("Preto")
    prod5.info() 
}

const btn=document.getElementById("btn_visualizar")
btn.addEventListener("click",(el)=>{
    configuracao()
})