let friends = [];
        function generateFriends() {
            const numFriends = Math.floor(Math.random() * 9) + 1;
            friends = [];

            for (let i = 0; i < numFriends; i++) {
                const name = prompt(`Enter nickname for friend ${i+1}:`);
                if (!name) {
                    alert("Please enter the nickname friends.");
                    return;
                }
                const age = parseInt(prompt(`Enter age for ${name}:`));
                friends.push({ name: name, age: age });
            }
            displayResults();
        }

        function calculateTotalAge() {
            let totalAge = friends.reduce((acc, friend) => acc + friend.age, 0);
            return totalAge;
        }

        function calculateAverageAge() {
            let totalAge = calculateTotalAge();
            return totalAge / friends.length;
        }

        function findYoungestFriend() {
            let youngestAge = Math.min(...friends.map(friend => friend.age));
            let youngestFriends = friends.filter(friend => friend.age === youngestAge);
            return youngestFriends;
        }

        function findOldestFriend() {
            let oldestAge = Math.max(...friends.map(friend => friend.age));
            let oldestFriends = friends.filter(friend => friend.age === oldestAge);
            return oldestFriends;
        }

        function displayResults() {
            let resultsDiv = document.getElementById('results');
            let selectedFunction = document.getElementById('functionSelect').value;

            switch (selectedFunction) {
                case 'totalAge':
                    resultsDiv.textContent = `Total Age of Friends: ${calculateTotalAge()}`;
                    break;
                case 'averageAge':
                    resultsDiv.textContent = `Average Age of Friends: ${calculateAverageAge()}`;
                    break;
                case 'youngestFriend':
                    let youngest = findYoungestFriend();
                    let youngestInfo = youngest.map(friend => `${friend.name} (${friend.age})`).join(', ');
                    resultsDiv.textContent = `Youngest Friend(s): ${youngestInfo}`;
                    break;
                case 'oldestFriend':
                    let oldest = findOldestFriend();
                    let oldestInfo = oldest.map(friend => `${friend.name} (${friend.age})`).join(', ');
                    resultsDiv.textContent = `Oldest Friend(s): ${oldestInfo}`;
                    break;
                default:
                    resultsDiv.textContent = "Please select a function.";
            }
        }

        function resetPage() {
            friends = [];
            document.getElementById('results').innerHTML = '';
            document.getElementById('functionSelect').selectedIndex = 0; // Reset function selection
        }