import stringify from 'json-stringify-safe';

export default class ENVS {
    constructor(db) {
        this.stack = [];
        if(db) {
            this.initDB(db);
            // this.stack.push(initEnv);
        }
    }

    initDB(db) {
        const env = [];
        for (let propName in db) {
            const propVal = db[propName];
            if(Array.isArray(propVal)) {
                for(let el in propVal) {
                    env.push(
                        {
                            name: propName,
                            value: propVal[el]
                        }
                    );
                }
            } else {
                env.push(
                    {
                        name: propName,
                        value: propVal
                    }
                );
            }
            const binder = { name: propName, }
        }
        //console.log(`initDB, env: ${stringify(env, null, 2)}`);
        this.stack.push(env)
    }

    pop() {
        return this.stack.pop();
    }

    bind(name) {
        const res = [];
        for (let i=this.stack.length-1; i>-1; i--) {
            const env = this.stack[i];
            env.forEach(binder => {
                if(binder.name == name) {
                    res.push(binder.value);
                    //console.log(`bind: ${binder.name}`);
                }
            });
            if(res.length > 0) {
                return res;
            }
        }
        return res;
    }

    nested(val) {
        const res = [];
        if(Array.isArray(val)) {
            return res;
        }
        const valType = typeof val;
        switch (valType) {
            case "string":
            case "number":
               return res;
        }
        for (let propName in val) {
            const propVal = val[propName];
            res.push({
                name: propName,
                value: propVal
            });
        }
        this.stack.push(res);
        //console.log(`nested: ${stringify(this.stack, null, 2)}`);
        return res;
    }
}