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
