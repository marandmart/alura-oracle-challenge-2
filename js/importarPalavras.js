const SUPABASE_URL = "https://ficcijsvkdniaxltqcpj.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0Mzk5NTg0MiwiZXhwIjoxOTU5NTcxODQyfQ.XHyS5_LsPml6_nDf6rB8578Xwp0hhC9YRBm1bDnDeMY";

var _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function carregarPalavras() {
    const { data, error } = await _supabase
        .from('palavras')
        .select('palavras')

    if (!error) {
        const result = Object.values(data);
        return result;
    }
}
