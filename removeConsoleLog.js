function rmConsoleLog(babel) {
    const {types: t} = babel;

    return {
        visitor: {
            CallExpression(path) {
                if (
                    path.node.callee.object &&
                    path.node.callee.object.name === "console" &&
                    path.node.callee.property.name === "log"
                ) {
                    path.remove();
                }
            }
        }
    };
}

module.exports = rmConsoleLog;