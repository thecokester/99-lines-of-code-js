var friends = [ "Justin", "Cornelius", "Jermaine", "Lance", "Jermichal" ];
for(var i = 0; i < friends.length; i++) {
console.log(friends[i]+":");
   for(var j = 99; j >= 1; j--) {
        if (j > 2) {
            console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file' );
        } else if (j == 2) {
            console.log([j] + ' lines of code in the file, ' + [j] + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file' );
        } else if (j = 1) {
            console.log([j] + ' line of code in the file, ' + [j] + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file' );
        }
    }
}

	// DOMContent
    // var addEventListener = function(listener, callback) {
    //    if (listener) {
    //         callback();
    //     }
    // }

    // document.addEventListener('domcontentloaded', function(){
    //     var button = document.createElement('button');
    //     button.style.border = '2px solid pink';
    //     button.style.color = 'purple';
    //     button.innerText = 'click';

    //     button.addEventListener ('click', function() {
    //         console.log('you clicked me');
            
    //         buttoncontainer.appendChild(button)();
    //     }
    // }