export const fetchMeetups = () => 
    fetch('192.168.1.1/api/meetups')
        .then( res => res.json());
