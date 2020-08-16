var now = new Date();
    var hours = now.getHours();
    var ft = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    });
    if (0 <= hours && hours < 12) {//Morning
        var type = "morning";
    }
    if (12 <= hours && hours < 17) {//Afternoon
        var type = "afternoon";
    }
    if (17 <= hours && hours < 24) {//Evening
        var type = "evening";
    }
    document.getElementById("greeting").innerHTML = `Good ${type},`;