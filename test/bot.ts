import { VK } from "vk-io";
import {SceneManager} from "@vk-io/scenes";
import { SessionManager } from "@vk-io/session";
import {IStepContext, StepScene, StepSceneHandler} from "@vk-io/scenes";
import {Keyboard} from "vk-io";


const vk = new VK({
    token: 'b7cc5a2b0d0af56b1837a4aed96f0ac15edc058f773952b09e2d013001fb131d8f5e671bfbb8dca185b3a',
});


const sManager = new SceneManager();
const sessionManager = new SessionManager();
vk.updates.on('message_new', sessionManager.middleware);
vk.updates.on('message_new', sManager.middleware);
vk.updates.on('message_new', sManager.middlewareIntercept);

let getStepScene: () => StepScene<IStepContext> = () => {
    function getSteps(): Array<StepSceneHandler> {
        return [firstStep, abitStep, studentStep];
    }
    enum Steps{
        main,
        abit,
        student
    }

    let firstStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Вы поступаете в институт?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "Да, я поступаю",
                    payload: {
                        command: Steps.abit
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "Нет, я студент",
                    payload: {
                        command: Steps.student
                    },
                    color: Keyboard.POSITIVE_COLOR
                }).oneTime().inline()
        })
    }
    let abitStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Что требуется?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "Найти наставника",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "Мне нужны знания!",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                        .row()
                        .textButton({
                            label: "В главное меню",
                            payload: {
                                command: Steps.main
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }).oneTime().inline()
                })
        })
    }
    let studentStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Что требуется?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "кнопка",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "кнопка",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                        .row()
                        .textButton({
                            label: "В главное меню",
                            payload: {
                                command: Steps.main
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }).oneTime().inline()
                })
        })
    }
}
vk.updates.on('message_new', async ctx =>
{
    if (ctx.isOutbox)
        return;
    else if(ctx.text == 'Начать' || ctx.text == '/start')
    {
        return ctx.scene.enter('hello');
    }
});
import { VK } from "vk-io";
import {SceneManager} from "@vk-io/scenes";
import { SessionManager } from "@vk-io/session";
import {IStepContext, StepScene, StepSceneHandler} from "@vk-io/scenes";
import {Keyboard} from "vk-io";


const vk = new VK({
    token: 'b7cc5a2b0d0af56b1837a4aed96f0ac15edc058f773952b09e2d013001fb131d8f5e671bfbb8dca185b3a',
});


const sManager = new SceneManager();
const sessionManager = new SessionManager();
vk.updates.on('message_new', sessionManager.middleware);
vk.updates.on('message_new', sManager.middleware);
vk.updates.on('message_new', sManager.middlewareIntercept);

let getStepScene: () => StepScene<IStepContext> = () => {
    function getSteps(): Array<StepSceneHandler> {
        return [firstStep, abitStep, studentStep];
    }
    enum Steps{
        main,
        abit,
        student
    }

    let firstStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Вы поступаете в институт?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "Да, я поступаю",
                    payload: {
                        command: Steps.abit
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "Нет, я студент",
                    payload: {
                        command: Steps.student
                    },
                    color: Keyboard.POSITIVE_COLOR
                }).oneTime().inline()
        })
    }
    let abitStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Что требуется?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "Найти наставника",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "Мне нужны знания!",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                        .row()
                        .textButton({
                            label: "В главное меню",
                            payload: {
                                command: Steps.main
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }).oneTime().inline()
                })
        })
    }
    let studentStep: StepSceneHandler = async (ctx:IStepContext) => {
        ctx.send({
            message: 'Что требуется?',
            keyboard: Keyboard.builder()
                .textButton({
                    label: "кнопка",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                })
                .row()
                .textButton({
                    label: "кнопка",
                    payload: {
                        command: ''
                    },
                    color: Keyboard.POSITIVE_COLOR
                        .row()
                        .textButton({
                            label: "В главное меню",
                            payload: {
                                command: Steps.main
                            },
                            color: Keyboard.PRIMARY_COLOR
                        }).oneTime().inline()
                })
        })
    }
}
vk.updates.on('message_new', async ctx =>
{
    if (ctx.isOutbox)
        return;
    else if(ctx.text == 'Начать' || ctx.text == '/start')
    {
        return ctx.scene.enter('hello');
    }
});

console.log(new Date());
vk.updates.start().catch(console.error);

console.log(new Date());
vk.updates.start().catch(console.error);
