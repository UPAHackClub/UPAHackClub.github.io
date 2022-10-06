const fs = require('fs')
const pug = require('pug')

const meetings = JSON.parse(fs.readFileSync('./meetings.json'))

fs.writeFileSync(
  './production/index.html',
  pug.renderFile('./source/home.html', {
    meetings: meetings
  })
)

for (const meeting of meetings) {
  if (!fs.existsSync(`./production/meetings/${meeting.num}`))
    fs.mkdirSync(`./production/meetings/${meeting.num}`)
  fs.writeFileSync(
    `./production/meetings/${meeting.num}/index.html`,
    pug.renderFile('./source/meeting.html', {
      meeting
    })
  )
}