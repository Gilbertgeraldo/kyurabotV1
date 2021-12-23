let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *Informasi Owner* ´ˎ˗
│ ✎ Nama : Gilbert
│    Kelas : 9
│    Umur : 15
│    Asal : Bandung
│    Status : gatau mw isi apa anj
│    Suka : Jepang, Coding (dikit), B.ingg, mtk
│ ✎ _Official Grup_ :
│    gaada gc:(
│ ✎ _Instagram_ :
│    @gaada_apa_apa_wkwk
│ ✎ _YouTube_ : 
│    -
│ ✎ _FaceBook_ :
│    -
│ ✎ _WhatsApp_ :
│    wa.me/6289656122352
╰‿‿‿‿‿‿‿‿
`.trim(), m)
}

handler.help = ['infogilbert']
handler.tags = ['main']
handler.command = /^(infogilbert)$/i

handler.exp = 150

module.exports = handler
