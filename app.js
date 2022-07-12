let usernames = [`AA`, `AC`, `AD`, `Winner`, `EE`];

let counter = 0;
while (counter < usernames.length) {
    let lower_usernames = usernames[counter].toLowerCase();
    if (lower_usernames === `winner`){
        let includes_winner = lower_usernames.includes(`winner`);
        console.log(`We have a winner named ${usernames[counter]}`);
    }
    counter++;
}