async function handler(m, { usedPrefix }) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
    await m.reply( 'no data')
    await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))
  }
  handler.command = handler.help = ['listjatrytdibot','bo5yyts','subsboyry4ts']
  handler.tags = ['jadibot']
  
  export default handler