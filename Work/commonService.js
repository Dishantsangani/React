import Moment from "moment";
import $ from "jquery";
// import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
// import { API_URL } from "../utils/apiRoutes";
import moment from "moment";
import axios from "axios";
import { errorToastMessage, successToastMessage } from "./toastMessage";
import CryptoJS from "crypto-js";
const cryptoKey = "SqT_cL@SsRoOm_S@T!Sh_393987";

export const commonService = {
  setItem,
  getItem,
  getHeaders,
  getHeadersFromData,
  getLoginUserData,
  getDateInFormat,
  getDateInFormatNew,
  getDateTimeInFormat,
  getFileType,
  getDateTimeInDBFormat,
  getDateInDBFormat,
  getDateInDateMonthFormat,
  getDateInAnyFormate,
  getTimeInFormat,
  CreateColor,
  getDateInMonthYearFormat,
  groupArrayOfObjects,
  getLoginRoleData,
  // SendPushNotification,
  ServerSideAjaxCall,
  ConvertDateInUTC,
  getFutureYearForDropDown,
  getPastYearForDropDown,
  checkDateIsValid,
  checkTermIsAvailable,
  checkPropertyIsAvailable,
  checkUserRole,
  checkUserPropertyRole,
  getDatesInRange,
  GenerateGUID,
  fnExportInCSV,
  fnExportSnapShotInCSV,
  getAllDatesInMonth,
  setBackColorPerByTDValue,
  datesBetweenTwoDate,
  getAmountInCompactFormat,
  getAmountInFormat,
  getDateForNode,
  getDateBetweenTwoDates,
  fnExportChartInCSV,
  checkRoleExist,
  // fnSendWidgetMail,
  // fnSendtSnapShotMail,
  fnExportReportInCSV,
  getDateFromType,
  getTokenItem,
  ConvertMinutesToTimeFormat,
  addClass,
  removeClass,
  convertSecondsToHoursMinutes,
  getUserRoleAccessData,
};

function getUserRoleAccessData(RoleData, key, right) {
  return RoleData?.some((element) => {
    if (element?.formname === key) {
      if (element[right]) {
        return true;
      }
    }
    return false;
  });
}

function ConvertMinutesToTimeFormat(Minutes) {
  if (Minutes !== null && Minutes !== "" && Minutes !== undefined) {
    return (
      Math.floor(Minutes / 60)
        .toString()
        .padStart(2, "0") +
      ":" +
      Math.floor(Minutes % 60)
        .toString()
        .padStart(2, "0")
    );
  } else {
    return "00:00";
  }
}

function checkRoleExist(roleDataArr, pageName, roleName) {
  let roleAccess = false;

  roleDataArr?.map((item) => {
    if (item?.pagename === pageName) {
      if (item[roleName] === 1) {
        roleAccess = true;
      }
    }
  });
  return roleAccess;
}

function getDateForNode(date) {
  let newDate = new Date(date);

  return moment(newDate).format("YYYY-MM-DD");
}

function datesBetweenTwoDate(startDate, endDate) {
  var dateObj = {};
  var currentDate = startDate;
  while (new Date(currentDate).getTime() <= new Date(endDate).getTime()) {
    dateObj[moment(currentDate).format("YYYY-MM-DD")] = {};
    currentDate = new Date(currentDate).setDate(
      new Date(currentDate).getDate() + 1
    );
  }
  return dateObj;
}

function getAllDatesInMonth(year, month) {
  let startDate = new Date(year, month, 1); // month is 0-indexed
  let endDate = new Date(year, month + 1, 1);

  let dates = [];
  while (startDate < endDate) {
    dates.push(new Date(startDate).getDate()); // clone the date object
    startDate.setDate(startDate.getDate() + 1);
  }

  return dates;
}

// const userRights = commonService.getItem("userRights") != null && commonService.getItem("userRights") !== "" ? JSON.parse(commonService.getItem("userRights")) : [];

function GenerateGUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  let dates = {};

  while (date <= endDate) {
    dates = {
      ...dates,
      [getDateInFormat(new Date(date))]: {
        data: [{ new: "newRow" }],
        totalRevenue: 0,
        totalRoomSold: 0,
      },
    };
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function getDateBetweenTwoDates(startDate, endDate) {
  const date = new Date(startDate.getTime());

  let dates = [];

  while (date <= endDate) {
    // dates = {
    //   ...dates,
    //   [getDateInFormat(new Date(date))]: {
    //     data: [{ new: "newRow" }],
    //     totalRevenue: 0,
    //     totalRoomSold: 0,
    //   },
    // };
    dates = [...dates, getDateInFormat(new Date(date))];
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

function checkUserRole(moduleName, pageName, key) {
  const rights = commonService.getItem("userRights");
  const userRights = rights ? JSON.parse(rights) : [];
  let access = false;
  for (let i = 0; i < userRights?.userrole?.length; i++) {
    if (
      userRights?.userrole?.[i]?.modulename === moduleName &&
      userRights?.userrole?.[i]?.pagename === pageName &&
      userRights?.userrole?.[i]?.[key] === 1
    ) {
      access = true;
    }
  }
  return access;
}

function checkUserPropertyRole(propertyId, moduleName, pageName, key) {
  const rights = commonService.getItem("userRights");
  const userRights = rights ? JSON.parse(rights) : [];
  let access = false;
  for (let i = 0; i < userRights?.userpropertyrole?.length; i++) {
    if (
      userRights?.userpropertyrole?.[i]?.propertyid === propertyId &&
      userRights?.userpropertyrole?.[i]?.modulename === moduleName &&
      userRights?.userpropertyrole?.[i]?.pagename === pageName &&
      userRights?.userpropertyrole?.[i]?.[key] === 1
    ) {
      access = true;
    }
  }
  return access;
}

function checkTermIsAvailable(termList, term) {
  let termName = "";
  termList?.map((item) => {
    if (item?.term === term) {
      termName = item?.term;
    }
  });
  return termName;
}

function checkPropertyIsAvailable(propertyList, propertyId) {
  let propertyIdDetail = "";
  propertyList?.map((item) => {
    if (item?.propertyid === propertyId) {
      propertyIdDetail = item?.propertyid;
    }
  });
  return propertyIdDetail;
}

function ConvertDateInUTC(date) {
  return new Date(new Date(date) + " UTC");
}

function checkDateIsValid(date) {
  let dateObj = Date.parse(date);
  let isValidDate = true;
  if (isNaN(dateObj)) {
    isValidDate = false;
  }
  return isValidDate;
}

function getFutureYearForDropDown(year) {
  const currentYear = new Date().getFullYear();
  let years = [];

  for (let i = 1; i <= year; i++) {
    years.push(currentYear + i);
  }

  return years;
}

function getPastYearForDropDown(year) {
  const currentYear = new Date().getFullYear();
  let years = [];

  for (let i = 1; i <= year; i++) {
    years.push(currentYear - i);
  }

  return years;
}

function setItem(key, strString) {
  localStorage.setItem(
    key,
    CryptoJS.AES.encrypt(strString, cryptoKey).toString()
  );
}

function getItem(key) {
  let dataValues = localStorage.getItem(key) || "";
  let dataStr = "";
  if (dataValues !== "") {
    var bytes = CryptoJS.AES.decrypt(dataValues, cryptoKey);
    let stringData = bytes.toString(CryptoJS.enc.Utf8);
    dataStr = JSON.parse(stringData);
  }
  return dataStr;
}

function getTokenItem(key) {
  let dataValues = localStorage.getItem(key) || "";
  let dataStr = "";
  if (dataValues !== "") {
    var bytes = CryptoJS.AES.decrypt(dataValues, cryptoKey);
    dataStr = bytes.toString(CryptoJS.enc.Utf8);
  }
  return dataStr;
}

function getHeaders() {
  return {
    "Content-Type": "application/json",
    accept: "*/*",
    Authorization: "Bearer " + getTokenItem("token"),
  };
}

// function SendPushNotification(
//   title,
//   details,
//   associationid,
//   associationtype,
//   SendToUserIDs
// ) {
//   let userData = getLoginUserData();
//   if (
//     userData !== null &&
//     userData.userid !== 0 &&
//     userData.tlog !== null &&
//     userData.tlog !== ""
//   ) {
//     const connect = new HubConnectionBuilder()
//       .withUrl(API_URL.BASE_API_URL.LogAndMessage, { withCredentials: false })
//       .withAutomaticReconnect()
//       .build();
//     connect
//       .start()
//       .then(() => {
//         connect.send("sendnotification", {
//           notificationbyid: userData.userid,
//           notificationtoids: SendToUserIDs,
//           title: title,
//           details: details,
//           associationid: associationid,
//           associationtype: associationtype,
//           notificationbyname: userData.displayname,
//           tlog: userData.tlog,
//         });
//       })
//       .catch((error) => {});
//   }
// }

function getHeadersFromData() {
  return {
    "Content-Type": "multipart/form-data",
    accept: "*/*",
    Authorization: "Bearer " + getTokenItem("token"),
  };
}

function getLoginUserData() {
  var data = {
    userid: "0",
    employeeid: "0",
    username: "",
    email: "",
    mobileno: "",
    displayname: "",
    profilepic: null,
    timezone: null,
    firstname: "",
    lastname: "",
    clientid: "0",
    tlog: "",
  };
  let dataStr = getItem("userDetail");
  if (dataStr !== "") {
    data = JSON.parse(dataStr);
  }

  return data;
}

function getLoginRoleData(PageName, ActionType) {
  let IsValidAction = false;
  var roledata = [];
  let roledataStr = getItem("roledata");
  if (roledataStr !== "") {
    roledata = JSON.parse(roledataStr);
    for (let i = 0; i < roledata.length; i++) {
      if (roledata[i].RightName.toUpperCase() == PageName.toUpperCase()) {
        if (ActionType.toUpperCase() == "ISVIEW") {
          return roledata[i].IsView;
        } else if (ActionType.toUpperCase() == "ISCREATE") {
          return roledata[i].IsCreate;
        } else if (ActionType.toUpperCase() == "ISDELETE") {
          return roledata[i].IsDelete;
        } else if (ActionType.toUpperCase() == "ISDOWNLOAD") {
          return roledata[i].IsDownload;
        } else if (ActionType.toUpperCase() == "ISEDIT") {
          return roledata[i].IsEdit;
        } else if (ActionType.toUpperCase() == "ISPRINT") {
          return roledata[i].IsPrint;
        }
      }
    }
  }

  return IsValidAction;
}

function getDateInFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("L");
  else return "";
}

function getDateInFormatNew(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("DD-MM-YYYY");
  else return "";
}

function getDateTimeInFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("L h:mm a");
  else return "";
}

function getDateTimeInDBFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("YYYY-MM-DD HH:mm:ss");
  else return "";
}

function getDateInDBFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("YYYY-MM-DD");
  // return Moment(date).format("YYYY-MM-DD HH:mm:ss");
  else return "";
}

function getDateInDateMonthFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("DD MMM");
  else return "";
}

function getDateInAnyFormate(date, formate) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format(formate);
  else return "";
}

function getDateInMonthYearFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("MMM YYYY");
  else return "";
}

function getTimeInFormat(date) {
  if (date !== null && date !== "" && date !== undefined)
    return Moment(date).format("h:mm a");
  else return "";
}

function getAmountInCompactFormat(amount, isWithSymbol) {
  if (amount !== undefined && amount !== null && amount !== "") {
    amount = Math.round(parseFloat(amount));
    if (amount < 1000) {
      amount = amount;
    } else if (amount >= 1000 && amount < 1_000_000) {
      amount = (amount / 1000).toFixed(1) + "K";
    } else if (amount >= 1_000_000 && amount < 1_000_000_000) {
      amount = (amount / 1_000_000).toFixed(1) + "M";
    } else if (amount >= 1_000_000_000 && amount < 1_000_000_000_000) {
      amount = (amount / 1_000_000_000).toFixed(1) + "B";
    } else if (amount >= 1_000_000_000_000 && amount < 1_000_000_000_000_000) {
      amount = (amount / 1_000_000_000_000).toFixed(1) + "T";
    }
  } else {
    amount = 0;
  }

  if (isWithSymbol) {
    return "$" + amount.toString();
  } else {
    return amount;
  }
}

function getAmountInFormat(amount) {
  if (amount !== undefined && amount !== null && amount !== "") {
    return "$" + amount.toString();
  } else {
    return "$0";
  }
}

function getFileType(file) {
  let FileType = "FILE";
  if (file !== null && file !== undefined) {
    if (file.type !== null && file.type !== "" && file.type !== undefined) {
      if (file.type.toUpperCase().indexOf("IMAGE") >= 0) {
        FileType = "IMAGE";
      } else if (file.type.toUpperCase().indexOf("AUDIO") >= 0) {
        FileType = "AUDIO";
      } else if (file.type.toUpperCase().indexOf("VIDEO") >= 0) {
        FileType = "VIDEO";
      } else if (file.type.toUpperCase().indexOf("PDF") >= 0) {
        FileType = "PDF";
      }
    }
  }
  return FileType;
}

function CreateColor(str) {
  let BGRGB = "000000";
  let FRGB = "FFFFFF";
  if (str !== "") {
    str = str + "000000";
    let hash = hashCode(str);
    BGRGB = intToRGB(hash);
    FRGB = invertColor(BGRGB);
  }
  return { BGColor: BGRGB, FontColor: FRGB };
}

function hashCode(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i) {
  var c = (i & 0x00ffffff).toString(16).toUpperCase();
  return "#" + "000000".substring(0, 6 - c.length) + c;
}

function invertColor(hex) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }

  var r = (255).toString(16),
    g = (255).toString(16),
    b = (255).toString(16);
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

function groupArrayOfObjects(list, key) {
  return list.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

function ServerSideAjaxCall(url, data) {
  return {
    url: url,
    method: "POST",
    data: data,
    headers: {
      accept: "*/*",
      Authorization: "Bearer " + getItem("token"),
    },
    beforeSend: function (re) {},
    error: function () {},
    dataFilter: function (data) {
      var json = {
        recordsTotal: 0,
        recordsFiltered: 0,
        data: [],
      };

      data = JSON.parse(data);
      if (data.status_code === 1) {
        json = {
          recordsTotal: data.data[0].totalrecords,
          recordsFiltered: data.data[0].totalrecords,
          data: data.data,
        };
      }

      return JSON.stringify(json);
    },
  };
}

function fnConvertSnapShotInTable(
  tableid,
  filename,
  snapshotid,
  isfullsnapshot
) {
  var tableHTML = "";
  if (isfullsnapshot) {
    $("#" + snapshotid)
      .find("[import]")
      .each(function () {
        var tableids = $(this).attr("import").split(",");
        if (tableids.length === 1) {
          var tableSelect = $("#" + tableids[0]).clone(); //document.getElementById(tableids[0]);
          $(tableSelect).find("select").remove();
          $(tableSelect).find("input").remove();
          $(tableSelect).find("img").remove();
          $(tableSelect).find(".label-radio.form-check-label").remove();
          var Header = $("#" + tableids[0])
            .parents("div.snapshotrow")
            .attr("rowtitle");
          var MainHeaderColspan = 0;
          $(tableSelect)
            .find("thead")
            .find("tr:first th")
            .each(function () {
              var colspan = $(this).attr("colspan");
              if (colspan != null && colspan != undefined && colspan != "") {
                MainHeaderColspan = MainHeaderColspan + parseInt(colspan);
              } else {
                MainHeaderColspan = MainHeaderColspan + 1;
              }
            });
          $(tableSelect)
            .find("thead")
            .prepend(
              "<td colspan='" +
                MainHeaderColspan +
                "'><h3>" +
                Header +
                "</h3></td>"
            );
          $(tableSelect).attr("border", "1");
          tableHTML = tableHTML + $(tableSelect)[0].outerHTML;
        } else {
          let tableSelect = $("#" + tableids[0]).clone();
          for (let i = 1; i < tableids.length; i++) {
            var temp = $("#" + tableids[i]);
            $(temp)
              .find("tr")
              .each(function (rowno) {
                $(this)
                  .find("td,th")
                  .each(function (colno) {
                    tableSelect.find("tr").eq(rowno).append($(this).clone());
                  });
              });
          }
          $(tableSelect).find("select").remove();
          $(tableSelect).find("input").remove();
          $(tableSelect).find("img").remove();
          $(tableSelect).find(".label-radio.form-check-label").remove();
          var Header = $("#" + tableids[0])
            .parents("div.snapshotrow")
            .attr("rowtitle");
          var MainHeaderColspan = 0;
          $(tableSelect)
            .find("thead")
            .find("tr:first th")
            .each(function () {
              var colspan = $(this).attr("colspan");
              if (colspan != null && colspan != undefined && colspan != "") {
                MainHeaderColspan = MainHeaderColspan + parseInt(colspan);
              } else {
                MainHeaderColspan = MainHeaderColspan + 1;
              }
            });
          $(tableSelect)
            .find("thead")
            .prepend(
              "<td colspan='" +
                MainHeaderColspan +
                "'><h3>" +
                Header +
                "</h3></td>"
            );
          $(tableSelect).attr("border", "1");
          tableHTML = tableHTML + $(tableSelect)[0].outerHTML;
        }
      });
  } else {
    var tableids = tableid.split(",");
    if (tableids.length === 1) {
      var tableSelect = $("#" + tableids[0]).clone(); //document.getElementById(tableids[0]).clone();
      $(tableSelect).find("select").remove();
      $(tableSelect).find("input").remove();
      $(tableSelect).find("img").remove();
      $(tableSelect).find(".label-radio.form-check-label").remove();
      var Header = $("#" + tableids[0])
        .parents("div.snapshotrow")
        .attr("rowtitle");
      var MainHeaderColspan = 0;

      $(tableSelect)
        .find("thead")
        .find("tr:first th")
        .each(function () {
          var colspan = $(this).attr("colspan");
          if (colspan != null && colspan != undefined && colspan != "") {
            MainHeaderColspan = MainHeaderColspan + parseInt(colspan);
          } else {
            MainHeaderColspan = MainHeaderColspan + 1;
          }
        });
      $(tableSelect)
        .find("thead")
        .prepend(
          "<td colspan='" + MainHeaderColspan + "'><h3>" + Header + "</h3></td>"
        );
      $(tableSelect).attr("border", "1");
      tableHTML = $(tableSelect)[0].outerHTML;
    } else {
      let tableSelect = $("#" + tableids[0]).clone();
      for (let i = 1; i < tableids.length; i++) {
        var temp = $("#" + tableids[i]);
        $(temp)
          .find("tr")
          .each(function (rowno) {
            $(this)
              .find("td,th")
              .each(function (colno) {
                tableSelect.find("tr").eq(rowno).append($(this).clone());
              });
          });
      }
      $(tableSelect).find("select").remove();
      $(tableSelect).find("input").remove();
      $(tableSelect).find("img").remove();
      $(tableSelect).find(".label-radio.form-check-label").remove();
      var Header = $("#" + tableids[0])
        .parents("div.snapshotrow")
        .attr("rowtitle");
      var MainHeaderColspan = 0;
      $(tableSelect)
        .find("thead")
        .find("tr:first th")
        .each(function () {
          var colspan = $(this).attr("colspan");
          if (colspan != null && colspan != undefined && colspan != "") {
            MainHeaderColspan = MainHeaderColspan + parseInt(colspan);
          } else {
            MainHeaderColspan = MainHeaderColspan + 1;
          }
        });
      $(tableSelect)
        .find("thead")
        .prepend(
          "<td colspan='" + MainHeaderColspan + "'><h3>" + Header + "</h3></td>"
        );
      $(tableSelect).attr("border", "1");
      tableHTML = $(tableSelect)[0].outerHTML;
    }
  }
  return tableHTML;
}

function fnExportInCSV(tableid, filename) {
  var tableHTML = fnConvertSnapShotInTable(tableid, filename, "", false);
  tableHTML = encodeURIComponent(tableHTML);
  var downloadLink;
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  filename = filename ? filename + ".xls" : "excel_data.xls";
  var dataType = "application/vnd.ms-excel";
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(["\ufeff", tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    downloadLink.href = "data:" + dataType + ", " + tableHTML;
    downloadLink.download = filename;
    downloadLink.click();
  }
}

function fnExportSnapShotInCSV(snapshotid, filename) {
  var tableHTML = fnConvertSnapShotInTable("", filename, snapshotid, true);
  tableHTML = encodeURIComponent(tableHTML);
  var downloadLink;
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  filename = filename ? filename + ".xls" : "excel_data.xls";
  var dataType = "application/vnd.ms-excel";
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(["\ufeff", tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    downloadLink.href = "data:" + dataType + ", " + tableHTML;
    downloadLink.download = filename;
    downloadLink.click();
  }
}

//snapshotmailtype = EXCEL , HTML
// function fnSendWidgetMail(
//   tableid,
//   filename,
//   snapshotid,
//   asofdata,
//   sendtoemails,
//   widgetid = 0,
//   snapshotmailtype = "EXCEL"
// ) {
//   var tableHTML = fnConvertSnapShotInTable(tableid, filename, "", false);
//   try {
//     let formData = new FormData();
//     formData.append("snapshotid", snapshotid);
//     formData.append("widgetid", widgetid);
//     formData.append("html", tableHTML);
//     formData.append("asofdata", asofdata);
//     formData.append("sendtoemails", sendtoemails);
//     formData.append("snapshotmailtype", snapshotmailtype);

//     let response = axios({
//       method: "POST",
//       url: API_URL.BASE_API_URL.Configuration + API_URL.SNAPSHOT.SNAPSHOT_MAIL,
//       data: formData,
//       headers: commonService.getHeadersFromData(),
//     }).then((res) => {
//       if (res.data.status_code === 1) {
//         successToastMessage(res?.data?.message);
//       } else {
//         errorToastMessage(res?.data?.message);
//       }
//     });
//   } catch (error) {}
// }

// function fnSendtSnapShotMail(
//   pagesnapshotid,
//   filename,
//   snapshotid,
//   asofdata,
//   sendtoemails,
//   widgetid = 0,
//   snapshotmailtype = "EXCEL"
// ) {
//   var tableHTML = fnConvertSnapShotInTable("", filename, pagesnapshotid, true);

//   try {
//     let formData = new FormData();
//     formData.append("snapshotid", snapshotid);
//     formData.append("widgetid", widgetid);
//     formData.append("html", tableHTML);
//     formData.append("asofdata", asofdata);
//     formData.append("sendtoemails", sendtoemails);
//     formData.append("snapshotmailtype", snapshotmailtype);

//     let response = axios({
//       method: "POST",
//       url: API_URL.BASE_API_URL.Configuration + API_URL.SNAPSHOT.SNAPSHOT_MAIL,
//       data: formData,
//       headers: commonService.getHeadersFromData(),
//     }).then((res) => {
//       if (res.data.status_code === 1) {
//         successToastMessage(res?.data?.message);
//       } else {
//         errorToastMessage(res?.data?.message);
//       }
//     });
//   } catch (error) {}
// }

function fnExportChartInCSV(chartid, filename) {
  const canvas = document.getElementById(chartid);
  var img = canvas.toDataURL("image/jpeg", 1); //image data of canvas

  var a = document.createElement("a"); //Create <a>
  //a.href = "data:image/png;base64," + ImageBase64;
  a.href = img;
  a.download = filename + ".jpeg"; //File name Here
  a.click();
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><img src="{table}" alt="grafica" /></body></html>',
    base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };

  var ctx = { worksheet: filename || "Hoja1", table: filename + ".jpeg" };
  //window.location.href = uri + base64(format(template, ctx))
  var link = document.createElement("a");
  link.download = filename + ".xls";
  link.href = uri + base64(format(template, ctx));
  link.click();
}

function setBackColorPerByTDValue(positiveColor, negativeColor, Container) {
  $(document).ready(function () {
    var MaxValue = 0;
    $(Container).each(function () {
      let DTVal = $(this).attr("value");
      if (DTVal !== null && DTVal !== undefined && DTVal !== 0) {
        if (parseFloat(DTVal) > MaxValue) {
          MaxValue = parseFloat(DTVal);
        } else if (parseFloat(DTVal) < 0) {
          if (parseFloat(DTVal) * -1 > MaxValue) {
            MaxValue = parseFloat(DTVal) * -1;
          }
        }
      }
    });

    $(Container).each(function () {
      let Color = positiveColor;
      let ColorPer = 0;
      let DefaultColorPer = 100;
      let DTVal = $(this).attr("value");
      if (DTVal !== null && DTVal !== undefined && DTVal !== 0) {
        if (
          parseFloat(DTVal) !== null &&
          parseFloat(DTVal) !== undefined &&
          parseFloat(DTVal) !== 0
        ) {
          if (parseFloat(DTVal) < 0) {
            DTVal = parseFloat(DTVal) * -1;
            Color = negativeColor;
          }
          ColorPer = Math.round((parseFloat(DTVal) * 100) / MaxValue);
        }
      }
      $(this).find(".bgdiv").remove();
      $(this).css("position", "relative");
      $(this).css("z-index", "1");
      let widthStyle = "calc(" + ColorPer + "% - 0px)";
      // if (ColorPer > 98) {
      //   widthStyle = "calc(" + ColorPer + "% - 5px)";
      // }
      $(this).append(
        "<div className='bgdiv' style='width:" +
          widthStyle +
          ";background:" +
          Color +
          ";'></div>"
      );
    });
  });
}

function fnExportReportInCSV(table, filename) {
  var tableHTML = encodeURIComponent(table);
  var downloadLink;
  downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink);
  filename = filename ? filename + ".xls" : "excel_data.xls";
  var dataType = "application/vnd.ms-excel";
  if (navigator.msSaveOrOpenBlob) {
    var blob = new Blob(["\ufeff", tableHTML], {
      type: dataType,
    });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    downloadLink.href = "data:" + dataType + ", " + tableHTML;
    downloadLink.download = filename;
    downloadLink.click();
  }
}

function convertSecondsToHoursMinutes(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  return hours + ":" + minutes;
}

function getDateFromType(dateType) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  let dateObj = {
    startDate: "",
    endDate: "",
  };
  if (dateType === "Last 7 Days") {
    let startDateForFilter = new Date(date);
    startDateForFilter.setDate(startDateForFilter.getDate() - 7);
    dateObj.startDate = startDateForFilter;
    dateObj.endDate = date;
  } else if (dateType === "Week To Date") {
    let s = new Date();
    s.setDate(s.getDate() - 1);
    let start = new Date(s.setDate(s.getDate() - s.getDay()));
    // let day = start.getDay();
    // let diff = start.getDate() - day + (day === 0 ? -6 : 1);
    // let startDateForFilter = new Date(start.setDate(diff));

    let startDateForFilter = new Date(
      start.setDate(start.getDate() - start.getDay())
    );

    dateObj.startDate = startDateForFilter;
    dateObj.endDate = date;
  } else if (dateType === "Month To Date") {
    let startDateForFilter = new Date(date.getFullYear(), date.getMonth(), 1);
    dateObj.startDate = startDateForFilter;
    dateObj.endDate = date;
  } else if (dateType === "Quarter To Date") {
    let quarterStartMonth = Math.floor(date.getMonth() / 3) * 3;
    let startDateForFilter = new Date(date.getFullYear(), quarterStartMonth, 1);
    dateObj.startDate = startDateForFilter;
    dateObj.endDate = date;
  } else if (dateType === "Year To Date") {
    let startDateForFilter = new Date(date.getFullYear(), 0, 1);
    dateObj.startDate = startDateForFilter;
    dateObj.endDate = date;
  }

  return dateObj;
}

function addClass(className) {
  document.getElementById("root").classList.add(className);
}

function removeClass(className) {
  document.getElementById("root").classList.remove(className);
}
