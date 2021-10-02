console.log("Hello World");

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domino = ['.com', '.net', '.us', '.io'];

function dNameG (pronoun, adj, noun, domino) {
    for (let p = 0; p < pronoun.length; p++) {
        for (let a = 0; a < adj.length; a++) {
            for (let n = 0; n < noun.length; n++) {
                for (let d = 0; d < domino.length; d++) {
                    console.log("www."+ pronoun[p] + adj[a] + noun[n] + domino[d]);
                }
            }
        }
    }
}
dNameG(pronoun,adj,noun,domino);