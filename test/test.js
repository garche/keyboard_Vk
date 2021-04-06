const { VK, Keyboard } = require("vk-io");
const {SceneManager, StepScene} = require ("@vk-io/scenes");
const { SessionManager } = require ("@vk-io/session");


const vk = new VK({
	token: 'b7cc5a2b0d0af56b1837a4aed96f0ac15edc058f773952b09e2d013001fb131d8f5e671bfbb8dca185b3a',
    apiVersions: "5.50",
});

let chek = true;

vk.updates.on('message', async function firstMassage(message)
{
    if (message.isOutbox)
        return;
    else if(message.text == 'start' || message.text == '/start')
    {
        chek = false;
        return message.send({
            message: "Вы убитуриент?",
            keyboard: kb1

        });
    }
    else if(chek)
        return message.send("Напиши start");
});

(async function vkStart()
{
    await vk.updates.startPolling();
})();

const kb1 = Keyboard.builder()
    .textButton({
        label: "Да, я поступаю",
        payload: {
            command: 'bad'
        },
        color: Keyboard.POSITIVE_COLOR
    })
    .row()
    .textButton({
        label: "Нет, я студент",
        payload: {
            command: 'good'
        },
        color: Keyboard.POSITIVE_COLOR
}).oneTime();



//const sManager = new SessionManager();
/**
const sManager = new SceneManager();

const kb1 = Keyboard.builder()
    .textButton({
        label: 'Ну получается так',
        payload: {
            command: 'real'
        }
    }).oneTime();

const kb2 = Keyboard.builder()
    .textButton({
        label: 'Ну погнали',
        payload: {
            command: 'true'
        },
        color: Keyboard.POSITIVE_COLOR
    })
    .row()
    .textButton({
        label: 'Гуйляй',
        payload: {
            command: 'false'
        },
        color: Keyboard.NEGATIVE_COLOR
    }).oneTime();


sManager.addScenes([
    new StepScene('hello',
        [
            (context) => {
                if (context.scene.step.firstTime || !context.text) {
                    return context.send({
                        message: 'это первая сцена',
                        keyboard: kb1
                    })
                }

                context.scene.state.command = context.messagePayload['command'];

                return context.scene.step.next();
            },
            (context) => {
                if (context.scene.step.firstTime || !context.text) {
                    return context.send('А че, звать то тебя как?')
                }
                context.scene.state.firstName = context.text;

                return context.scene.step.next();
            },
            (context) => {
                if (context.scene.step.firstTime || !context.text) {
                    return context.send({
                        message: "Чо хочешь узнать как тебя звать?",
                        keyboard: kb2
                    })
                }

                context.scene.state.command = context.messagePayload['command'];

                return context.scene.step.next();
            },
            async (context) => {
                const {firstName, command} = context.scene.state;

                if (command === 'true') {
                    await context.send(`Кароче, имя твоё: ${firstName}`)
                }
                if (command === 'false') {
                    await context.send('Гуляй, фраер')
                }

                return context.scene.step.next();
            }
        ]
    )]
)


vk.updates.on('message_new', (context, next) =>{
    console.log(new Date());
    if(context.text === '/start' || context.text === 'start'){
        return context.scene.enter('hello');
    }
    return next;
});

const sessionManager = new SessionManager();
vk.updates.on('message_new', sessionManager.middleware);
vk.updates.on('message_new', sManager.middleware);
vk.updates.on('message_new', sManager.middlewareIntercept);



vk.updates.start().catch(console.error)
*/