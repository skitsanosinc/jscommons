/**
 * ApplicationQuees
 * @author skitsanos
 * @date 11/3/15
 * @version 1.0.0
 */

var ApplicationQueues = {
    AbstractCommand: function (lbl)
    {
        return {
            label: lbl != undefined ? lbl : '',

            execute: function ()
            {
            },

            toString: function ()
            {
                return 'queues.AbstractCommand ' + this.label;
            },

            commandComplete: function ()
            {
                this.queue.currentCommandExecuted();
            },

            commandFail: function ()
            {
                this.queue.currentCommandExecuted();
            }
        }
    },

    Queue: function ()
    {
        var commandList = new HashMap();
        var currentCommand = null;
        var currentCommandIndex = 0;

        return {
            toString: function ()
            {
                return 'queues.CommandQueue ' + this.label;
            },

            count: function ()
            {
                return commandList.count();
            },

            currentCommandExecuted: function ()
            {
                this.removeCommand([currentCommand]);
                this.execute();
            },

            queueExecuted: function ()
            {

            },

            addCommand: function (commands)
            {
                for (var i = 0; i < commands.length; i++)
                {
                    var cmd = commands[i];
                    cmd.queue = this;
                    commandList.set(currentCommandIndex, cmd);
                    currentCommandIndex++;
                }
            },

            removeCommand: function (commands)
            {
                //console.log(commandList.count() + ' command are still in queue');

                for (var i = 0; i < commands.length; i++)
                {
                    console.log(commandList.search(commands[i]));

                    if (commandList.search(commands[i]) != null)
                    {
                        //console.log('removing {' + commandList.keys()[i] + '}' + commands[i].label + ' from the queue')
                        commandList.remove(commandList.keys()[i]);
                        //console.log(commandList.count() + ' command are still in queue');
                    }
                    else
                    {
                        //console.log('not found');
                    }
                }
            },

            execute: function ()
            {
                if (commandList.count() < 1)
                {
                    console.log('all done');
                    this.queueExecuted();
                }
                else
                {
                    //console.log('[queue.execute:] ' + commandList.count() + ' command are in queue');
                    currentCommand = commandList.get(commandList.keys()[0]);
                    currentCommand.execute();
                }
            }
        }
    }
};
