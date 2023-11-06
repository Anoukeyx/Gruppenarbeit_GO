import { supa, supaAdmin } from "../supabase.js";

const btn = document.querySelector('#loeschen');
btn.addEventListener('click', deleteUser);


// TODO: ersetze userID durch id des eingeloggten Users
// const userId = await supa.auth.getUser()
// console.log(userId)
const userId = 'a1640389-e414-4c89-a7b0-b80049e27012'

async function deleteUser () {
    // lösche die daten des users mit der user id 'userId' aus der Tabelle Person
    const { error } = await supa
        .from('Person')
        .delete()
        .eq('user_id', userId)
    
    if (error) console.error(error)

    // Lösche den Account mit dem supabase admin client
    const { data, error: err } = await supaAdmin.auth.admin.deleteUser(
        userId
    )

    if (err) console.error(err)

    if (!err && !error) {
        window.location.pathname="../index.html"
    }
}