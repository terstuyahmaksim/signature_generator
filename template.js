const fs = require("fs");
const res = fs.readFileSync("./res.json").toString();
const Mustache = require("mustache");

const arr = JSON.parse(res);

arr.forEach(({ user }) => {
  const view = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    avatar: user.employeeprofile.avatar,
    position: user.employeeprofile.position.title,
  };

  const output = Mustache.render(
    `
  <div
    id=":ng"
    class="Am aiL IP Al editable Xp0HJf-LW-avf"
    hidefocus="true"
    aria-label="Подпись"
    g_editable="true"
    role="textbox"
    aria-multiline="true"
    contenteditable="true"
    style="direction: ltr"
  >
    <div
      style="
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        font-size: 0px;
        max-width: 64px;
        direction: ltr;
        display: inline-block;
        vertical-align: top;
        color: rgb(98, 98, 98);
        width: auto;
      "
    >
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
          <tr>
            <td style="vertical-align: top; padding: 0px">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                  <tr>
                    <td
                      style="
                        padding: 0px;
                        word-break: break-word;
                        text-align: center;
                      "
                    >
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        style="border-collapse: collapse; border-spacing: 0px"
                      >
                        <tbody>
                          <tr>
                            <td style="width: 81px">
                              <img
                                src="{{avatar}}"
                                width="96"
                                height="96"
                                class="CToWUd"
                                style="
                                  border-radius: 20px;
                                  padding: 0px;
                                  border: 0px;
                                  display: block;
                                  outline: none;
                                  font-size: 13px;
                                "
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <span
      style="
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        font-size: 0px;
      "
      >&nbsp;</span
    >
    <div
      style="
        font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
        font-size: 0px;
        direction: ltr;
        display: inline-block;
        vertical-align: top;
        color: rgb(98, 98, 98);
        width: auto;
      "
    >
      <table
        border="0"
        cellpadding="0"
        cellspacing="0"
        width="100%"
        style="vertical-align: top"
      >
        <tbody>
          <tr>
            <td style="padding: 0px; word-break: break-word">
              <div
                style="
                  font-family: Ubuntu, Helvetica, Arial, sans-serif;
                  line-height: 1;
                  width: auto;
                  padding: 6px 10px;
                  font-size: 16px;
                "
              >
                &nbsp; &nbsp; &nbsp; &nbsp; {{firstName}} {{lastName}}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 0px; word-break: break-word">
              <div
                style="
                  padding: 2px 10px;
                  font-family: Ubuntu, Helvetica, Arial, sans-serif;
                  font-size: 13px;
                  line-height: 1;
                  width: auto;
                "
              >
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {{position}} at Yojji
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding: 0px; word-break: break-word">
              <div style="padding: 2px 10px; line-height: 1; width: auto">
                <span
                  style="
                    font-family: Ubuntu, Helvetica, Arial, sans-serif;
                    font-size: 13px;
                  "
                  >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span
                >
                <font
                  color="#202124"
                  face="Arial, Helvetica, sans-serif"
                  size="2"
                >
                  <a
                    href="mailto:{{email}}"
                    target="_blank"
                    style="color: rgb(17, 85, 204)"
                    >{{email}}</a
                  >
                </font>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  `,
    view
  );

  fs.writeFile(
    `./html_output/${user.firstName}_${user.lastName}.html`,
    output,
    { flag: "w" },
    function (err) {
      if (err) return console.log(err);
      console.log("The file was saved!");
    }
  );
});
