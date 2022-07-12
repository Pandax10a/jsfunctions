let usernames = [`AA`, `AC`, `AD`, `Winner`, `IAmWinner`];

let counter = 0;
while (counter < usernames.length) {
    let lower_usernames = usernames[counter].toLowerCase();
    let includes_winner = lower_usernames.includes(`winner`);
    if ( includes_winner){
        
        console.log(`We have a winner named ${usernames[counter]}`);
    }
    counter++;
}