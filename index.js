
let titles = ["Javascript", "ASP.net", "Frontend", "Backend", "Fullstack", "AWS", "React", "Vue"];

function changeTitle(i) {
    let title = titles[i];
    
    if (i === titles.length) {
        const titleText = document.getElementById("title");
        titleText.innerText = "WEB"
        return;
    }

    const titleText = document.getElementById("title");
    titleText.innerText = title.toUpperCase();

    setTimeout(() => {
        i++
        changeTitle(i);
    }, 500);
}

function goTo(type) {
    
    switch(type) {
        case 'email':
            const recipient = 'ahumada1790@gmail.com';
            const subject = 'Hello';
            const body = "Let's work";
          
            const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
            window.location.href = mailtoUrl;
        break;
        case 'linkedin':
            window.open('https://www.linkedin.com/in/salvadorahumadazepeda/', '_blank');
        break;
        case 'github':
            window.open('https://github.com/SalvadorAhumada', '_blank');
        break;
    }

}

document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
        const loading = document.getElementById("loading");
        loading.style.display = "none";
        setTimeout(() => {
            changeTitle(0);
        }, 1000);

    }
};

function openResume() {
    window.open('https://www.linkedin.com/in/salvadorahumadazepeda/', '_blank').focus();
}