import { supabase } from "@/lib/supabase";

export default async function Test() {
  const { data, error } = await supabase.from("properties").select("*").eq("id", 4).single();
  
  if (error) return <h1>Error: {error.message}</h1>;
  if (!data) return <h1>No encontré la propiedad 4</h1>;
  
  return <h1>¡Funcionó! La propiedad es: {data.title}</h1>;
}