const {Command} = require('../../lib');
const Discord = require('discord.js');
const beautify = require('beautify');
const {inspect} = require('util');
const hastebin = require('hastebin.js');
const bin = new hastebin();

module.exports = class evaluate extends Command {
    constructor() {
        super('eval');
    }

    async run(message, args) {

        if (!['464499620093886486', '671374842951630858'].includes(message.author.id)) 
            return message.sm('This command is for developers only!', {type: 'error'});

        if (args < 1 || !args.length)
            return message.sm('You need to specify a code to execute!', {type: 'error'});

        let evaluation = args.join(' ');
        const format = x => `\`\`\`js\n${x}\`\`\``;
        const embed = message.embed();
        const input = 
            evaluation.length > 1000
                ? await bin.post(evaluation)
                : format(evaluation);

        embed
             .setTitle('Evaluation : Success')
             .addField('Input', input);

        try {
            const start = process.hrtime();
            if (evaluation.includes('await'))
                evaluation = `(async () => { ${evaluation} })()`;

            const _ = await eval(evaluation);
            const diff = process.hrtime(start);
            const type = typeof _;
            type.slice(0, 1).toUpperCase() + type.slice(1);
            const time = diff[0] > 0 ? `${diff[0]}s` : `${diff[1] / 1000000}ms`;
            let output = beautify(inspect(_, { depth: 0 }), {
                format: 'js'
            });

            output = output.length > 1000 ? await bin.post(output) : format(output);

            embed
                 .setColor('ff0000')
                 .addField('Output', output)
                 .addField('Extra Info', `**Time** ${time}\n**Type** ${type}`);
        } catch(e) {
            const error =
                e.stack.length > 1000 ? await bin.post(e.stack) : format(e.stack);
            embed
                 .setTitle('Evaluation : Error')
                 .setColor('bc0000')
                 .addField('Error', error, false)
                 .addField('Extra Info', '**Type** Error');
        }

        message.channel.send(embed);

    }
}