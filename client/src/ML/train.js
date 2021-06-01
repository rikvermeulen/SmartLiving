async function load_data(){
    const csvUrl = 'iris.csv';
    const trainingData = tf.data.csv(csvUrl, {
        columnConfigs: {
            species: {
                isLabel: true
            }
        }
    });
}

async function doTraining(model){
    const history = 
          await model.fit(xs, ys, 
                { epochs: 500,
                  callbacks:{
                      onEpochEnd: async(epoch, logs) =>{
                          console.log("Epoch:" 
                                      + epoch 
                                      + " Loss:" 
                                      + logs.loss);
                          
                      }
                  }
                });
}

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss:'meanSquaredError', 
                       optimizer:'sgd'});