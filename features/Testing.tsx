import * as React from 'react';
import DisplayText from "../components/DisplayText/DisplayText";

function Testing() {
    const getUserFullname = async (username: string): Promise<string> => {
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com.users');
        if(usersResponse.ok) {
            const users = await usersResponse.json();
            const userByName = users.find((usr: any) => {
                return usr.username.toLowerCase() === username;
            });
            return userByName.name;
        }
        return ""
    }
    return (
        <div className="App">
            <DisplayText getUserFullname={getUserFullname} />
        </div>
    )
}

export default Testing;
