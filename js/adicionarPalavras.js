const SUPABASE_URL = "https://ficcijsvkdniaxltqcpj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk5NTg0MiwiZXhwIjoxOTU5NTcxODQyfQ.XHyS5_LsPml6_nDf6rB8578Xwp0hhC9YRBm1bDnDeMY";

var _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function inserirPalavras(dados) {
    const palavra = {
        palavras: dados
    };
    const { dados, error } = await _supabase
        .from('palavras')
        .insert([{
            palavra
        }])

    alert("Palavra enviada!");
    console.log(dados);
    console.log(error);
}