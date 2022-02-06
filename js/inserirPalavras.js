var _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function inserirPalavras(dado) {
    const palavra = {
        palavras: dado
    };
    const { data, error } = await _supabase
        .from('palavras')
        .insert([
            palavra
        ])

    alert("Palavra enviada!");
    console.log(data);
    console.log(error);
}