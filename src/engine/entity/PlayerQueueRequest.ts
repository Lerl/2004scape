import ScriptFile from '#/engine/script/ScriptFile.js';
import ScriptState from '#/engine/script/ScriptState.js';
import Linkable from '#/util/Linkable.js';

export enum PlayerQueueType {
    NORMAL,
    LONG, // like normal with dev-controlled logout behavior
    ENGINE,
    WEAK, // sept 2004
    STRONG, // late-2004
    SOFT // OSRS
}

export type QueueType = PlayerQueueType;
export type ScriptArgument = number | string;

export class PlayerQueueRequest extends Linkable {
    /**
     * The type of queue request.
     */
    type: QueueType;

    /**
     * The script to execute.
     */
    script: ScriptFile;

    /**
     * The arguments to execute the script with.
     */
    args: ScriptArgument[];

    /**
     * The number of ticks remaining until the queue executes.
     */
    delay: number;

    lastInt: number = 0;

    constructor(type: QueueType, script: ScriptFile, args: ScriptArgument[], delay: number) {
        super();
        this.type = type;
        this.script = script;
        this.args = args;
        this.delay = delay;
    }
}

export class EntityQueueState extends Linkable {
    script: ScriptState;
    delay: number;

    constructor(script: ScriptState, delay: number) {
        super();
        this.script = script;
        this.delay = delay;
    }
}
