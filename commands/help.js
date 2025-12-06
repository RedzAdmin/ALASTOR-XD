const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╭━━━━━━━━━━━━━━━━━┈⊷
┃✮│➣ *😈 ${settings.botName || '𝐀𝐋𝐀𝐒𝐓𝐎𝐑-𝐗𝐃'}*  
┃✮│➣ Version: *${settings.version || '1.0.0'}*
┃✮│➣ by ${settings.botOwner || '𝐂𝐎𝐃𝐄𝐁𝐑𝐄𝐀𝐊𝐄𝐑'}
┃✮│➣ YT : ${global.ytch}
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━〔𝙶𝙴𝙽𝙴𝚁𝙰𝙻 𝙼𝙴𝙽𝚄 〕━┈⊷
┃✮│➣ .help / .menu
┃✮│➣ .ping
┃✮│➣ .alive
┃✮│➣ .tts <text>
┃✮│➣ .owner
┃✮│➣ .joke
┃✮│➣ .quote
┃✮│➣ .fact
┃✮│➣ .news
┃✮│➣ .attp <text>
┃✮│➣ .weather <city>
┃✮│➣ .lyrics <song title>
┃✮│➣ .8ball <question>
┃✮│➣ .groupinfo
┃✮│➣ .staff / .admins
┃✮│➣ .vv
┃✮│➣ .trt <text> <lang>
┃✮│➣ .ss <link>
┃✮│➣ .jid
┃✮│➣ .url
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔𝙰𝙳𝙼𝙸𝙽 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .ban 
┃✮│➣ .promote
┃✮│➣ .demote
┃✮│➣ .mute
┃✮│➣ .unmute
┃✮│➣ .del
┃✮│➣ .kick
┃✮│➣ .warnings
┃✮│➣ .warn
┃✮│➣ .antilink
┃✮│➣ .antibadword
┃✮│➣ .clear
┃✮│➣ .tag
┃✮│➣ .tagall
┃✮│➣ .tagnotadmin
┃✮│➣ .hidetag
┃✮│➣ .chatbot
┃✮│➣ .resetlink
┃✮│➣ .antitag
┃✮│➣ .welcome 
┃✮│➣ .goodbye
┃✮│➣ .setgdesc <description>
┃✮│➣ .setgname <new name>
┃✮│➣ .setgpp
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .mode (public/self>
┃✮│➣ .clearsession
┃✮│➣ .antidelete
┃✮│➣ .cleartmp
┃✮│➣ .update
┃✮│➣ .settings
┃✮│➣ .setpp <reply to image>
┃✮│➣ .autoreact
┃✮│➣ .autostatus
┃✮│➣ .autostatus react
┃✮│➣ .autoread
┃✮│➣ .autotyping
┃✮│➣ .anticall
┃✮│➣ .pmblocker
┃✮│➣ .pmblocker setmsg
┃✮│➣ .setmention <reply 2 msg>
┃✮│➣ .mention
╰━━━━━━━━━━━━━━━━━┈⊷

╭━〔𝙸𝙼𝙶/𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 〕━⊷
┃✮│➣ .blur <reply to image>
┃✮│➣ .simage <reply to sticker>
┃✮│➣ .removebg
┃✮│➣ .remini
┃✮│➣ .sticker
┃✮│➣ .tgsticker
┃✮│➣ .crop
┃✮│➣ .meme
┃✮│➣ .take 
┃✮│➣ .emojimix
┃✮│➣ .igs <insta link>
┃✮│➣ .igsc <insta link>
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔𝙿𝙸𝙴𝚂 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .pies <country>
┃✮│➣ .japan
┃✮│➣ .korean
┃✮│➣ .indonesia
┃✮│➣ .china
┃✮│➣ .hijab
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .tictactoe @user
┃✮│➣ .hangman
┃✮│➣ .guess <letter>
┃✮│➣ .trivia
┃✮│➣ .answer <answer>
┃✮│➣ .truth
┃✮│➣ .dare
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙰𝙸 𝙼𝙴𝙽𝚄 〕━━┈⊷ 
┃✮│➣ .gpt <question>
┃✮│➣ .gemini <question>
┃✮│➣ .imagine <question>
┃✮│➣ .flux <question>
┃✮│➣ .sora <question>
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙶𝙸𝚃 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .git
┃✮│➣ .github
┃✮│➣ .sc
┃✮│➣ .script
┃✮│➣ .repo
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙰𝙸 𝙼𝙴𝙽𝚄〕━━┈⊷
┃✮│➣ .nom
┃✮│➣ .poke
┃✮│➣ .cry
┃✮│➣ .kiss
┃✮│➣ .pat
┃✮│➣ .hug
┃✮│➣ .wink
┃✮│➣ .facepalm
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙼𝙸𝚂𝙲 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .heart
┃✮│➣ .horny
┃✮│➣ .lgbt
┃✮│➣ .circle
┃✮│➣ .lolice
┃✮│➣ .its-so-stupid
┃✮│➣ .namecard
┃✮│➣ .oogway
┃✮│➣ .tweet
┃✮│➣ .ytcomment
┃✮│➣ .comrade 
┃✮│➣ .gay
┃✮│➣ .glass
┃✮│➣ .jail
┃✮│➣ .passed
┃✮│➣ .triggered 
╰━━━━━━━━━━━━━━━━━┈⊷

╭━━━〔 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 〕━━┈⊷
┃✮│➣ .compliment @user
┃✮│➣ .insult @user
┃✮│➣ .flirt
┃✮│➣ .shayari
┃✮│➣ .goodnight
┃✮│➣ .roseday
┃✮│➣ .character @user
┃✮│➣ .wasted @user
┃✮│➣ .ship @user
┃✮│➣ .simp @user
┃✮│➣ .stupid @user [txt] 
╰━━━━━━━━━━━━━━━━━┈⊷

╭━〔 𝚃𝚇𝚃 𝙼𝙰𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 〕━┈⊷
┃✮│➣ .metalic <txt>
┃✮│➣ .ice <txt>
┃✮│➣ .snow <txt
┃✮│➣ .impressive 
┃✮│➣ .matrix <txt>
┃✮│➣ .light <txt>
┃✮│➣ .neon <txt>
┃✮│➣ .devil <txt>
┃✮│➣ .purple <txt>
┃✮│➣ .thunder <txt>
┃✮│➣ .hacker <txt>
┃✮│➣ .sand <txt>
┃✮│➣ .leaves <txt>
┃✮│➣ .1917 <txt>
┃✮│➣ .arena <txt>
┃✮│➣ .blackpink <txt>
┃✮│➣ .glitch <txt>
┃✮│➣ .fire <txt>
╰━━━━━━━━━━━━━━━━━┈⊷

╭━〔 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 〕━┈⊷
┃✮│➣ .song <song name>
┃✮│➣ .play <song name>
┃✮│➣ .spotify <song name> 
┃✮│➣ .instagram <link>
┃✮│➣ .facebook <link>
┃✮│➣ .tiktok <link>
┃✮│➣ .video <song name>
┃✮│➣ .ytmp4 <link>
╰━━━━━━━━━━━━━━━━━┈⊷
╭━━━━〔 𝚄𝙿𝙳𝙰𝚃𝙴𝚂 〕━━━┈⊷
┃✮│➣ Join Channel 👇👇
╰━━━━━━━━━━━━━━━━━┈⊷`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363404912601381@newsletter',
                        newsletterName: 'ALASTOR - XD',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363404912601381@newsletter',
                        newsletterName: 'ALASTOR - XD by CODEBREAKER',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;