
const userNameEle = document.getElementsByTagName("h1")[0];
const LogOutBtn = document.getElementsByTagName("button")[0];
const userEmailEle = document.getElementsByClassName("email")[0]
const userWhatsAppNumEle = document.getElementsByClassName("WhatsAppNo")[0];
const userLastActive = document.getElementsByClassName("LastActive")[0];
const info = document.getElementsByClassName('information')[0];
console.log(info);

function showProfile() {
    let userData = JSON.parse(localStorage.getItem("user"));
    console.log(userData)
    if (userData) {
        info.innerHTML = `
      <div class="information">
            <h3>
            Hello!    ${userData?.email?.name ?? userData?.email?.email}
            </h3>
            <div class="infoDiv">
                <div>
                    Email
                    <strong class="email">
                        :${userData?.email?.email}
                    </strong>
                </div>
                <div>
                    WhatsAppNo:
                    <strong class="WhatsAppNo">
                        ${userData?.waNumber}
                    </strong>
                </div>
                <div>
                    Last Activity at:
                    <strong class="LastActive">
                        ${userData?.timestamp
            }
                    </strong>
                </div>
            </div>
            <div>
            </div>
        </div>
        `;
    } else {
        window.location.href = "../../index.html"
    }
}
showProfile();

LogOutBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    showProfile();

})

window.onload = () => {
    showProfile();
};