function generateMarkdown(data) {
    return `
    <a href="${data.link}" style="float:right"><img src="${data.name}" title="${data.name}" width="120" height="120"></a>
    # ${data.title.toUpperCase()}
    ![License: ${(data.lic) ? data.lic : "None"}]

    _Repo by ${data.name}_
    _${data.desc}_

    _Installation:_
    ${data.inst}
    _Usage:_
    ${data.use}
    _Contributor:_
    ${data.con}
    _Test:_
    ${data.test}
    _Question:_
    ${data.qs}
  
  `;
  }
  
  module.exports = generateMarkdown;