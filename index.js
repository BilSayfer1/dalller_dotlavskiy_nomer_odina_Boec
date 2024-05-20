const users = `
ID: 1234, Name: Ivan, Surname: Ivanov, Email: ivan.ivanov@example.com, Phone: +71234567890
ID: 2345, Name: Maria, Surname: Petrova, Email: maria.petrova@example.com, Phone: +71234567891
ID: 3456, Name: Alexey, Surname: Sidorov, Email: alexey.sidorov@example.com, Phone: +71234567892
ID: 4567, Name: Olga, Surname: Smirnova, Email: olga.smirnova@example.com, Phone: +71234567893
ID: 5678, Name: Dmitry, Surname: Volkov, Email: dmitry.volkov@example.com, Phone: +71234567894
ID: 6789, Name: Elena, Surname: Kozlova, Email: elena.kozlova@example.com, Phone: +71234567895
ID: 7890, Name: Sergey, Surname: Morozov, Email: sergey.morozov@example.com, Phone: +71234567896
ID: 8901, Name: Anna, Surname: Pavlova, Email: anna.pavlova@example.com, Phone: +71234567897
ID: 9012, Name: Pavel, Surname: Lebedev, Email: pavel.lebedev@example.com, Phone: +71234567898
ID: 1023, Name: Tatiana, Surname: Romanova, Email: tatiana.romanova@example.com, Phone: +71234567899
`;

const userArray = users.trim().split('\n');
    const userObjects = [];

    for (let i = 0; i < userArray.length; i++) {
        const user = userArray[i];
        const userParts = user.split(', ');

        const userObject = {};
        for (let k = 0; k < userParts.length; k++) {
            const part = userParts[k].split(': ');
            const key = part[0].toLowerCase();
            const value = part[1];
            userObject[key] = value;
        }
        userObjects.push({
            id: userObject.id,
            surname: userObject.surname,
            email: userObject.email,
            phone: userObject.phone
        });
    
        console.log(userObjects);
    
    }




    


