        function fillChart(svg) {
          //
          // *******************************************************************
          //
          // Set the number of decimals behing the point, either 0 or 1:
          //   E.g. setting it to 1 will round to 12.3%
          //        setting it to 0 will round to 12%
          //
          var no_of_decimals = 0;
          //
          // Rearrange the parties according to size, and fill in the percentage:
          //
          fillParty(svg, no_of_decimals, "1", "SDS", 24.0 / 0.803);
          fillParty(svg, no_of_decimals, "2", "LMŠ", 10.1 / 0.803);
          fillParty(svg, no_of_decimals, "3", "SD", 10.1 / 0.803);
          fillParty(svg, no_of_decimals, "4", "SMC", 3.1 / 0.803);
          fillParty(svg, no_of_decimals, "5", "L", 6.8 / 0.803);
          fillParty(svg, no_of_decimals, "6", "NSi", 4.8 / 0.803);
          fillParty(svg, no_of_decimals, "7", "PAB", 1.7 / 0.803);
          fillParty(svg, no_of_decimals, "8", "DeSUS", 3.2 / 0.803);
          fillParty(svg, no_of_decimals, "9", "SNS", 2.3 / 0.803);
          fillParty(svg, no_of_decimals, "10", "PPS", 1.3 / 0.803);
          fillParty(svg, no_of_decimals, "11", "SLS", 1.1 / 0.803);
          fillParty(svg, no_of_decimals, "12", "DD", 0.8 / 0.803);
          fillParty(svg, no_of_decimals, "13", "AČZS", 0.5 / 0.803);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["AČZS"] = "Greens/EFA";
          ep_groups["DD"] = "*";
          ep_groups["DeSUS"] = "ALDE";
          ep_groups["L"] = "GUE/NGL";
          ep_groups["LMŠ"] = "*";
          ep_groups["NSi"] = "EPP";
          ep_groups["PAB"] = "ALDE";
          ep_groups["PPS"] = "Greens/EFA";
          ep_groups["SD"] = "S&D";
          ep_groups["SDS"] = "EPP";
          ep_groups["SLS"] = "EPP";
          ep_groups["SMC"] = "ALDE";
          ep_groups["SNS"] = "*";
          var last_results = {};
          last_results["AČZS"] = 1.1;
          last_results["DD"] = 1.5;
          last_results["DeSUS"] = 4.9;
          last_results["L"] = 9.3;
          last_results["LMŠ"] = 12.6;
          last_results["NSi"] = 7.2;
          last_results["PAB"] = 5.1;
          last_results["PPS"] = 2.2;
          last_results["SD"] = 9.9;
          last_results["SDS"] = 24.9;
          last_results["SLS"] = 2.6;
          last_results["SMC"] = 9.8;
          last_results["SNS"] = 4.2;
          var colors = getEpGroupColors();
          svg.getElementById("party-name-" + index).firstChild.nodeValue = name;
          svg.getElementById("ep-group-name-" + index).firstChild.nodeValue = ep_groups[name];
          svg.getElementById("party-bar-" + index).setAttribute("height", result * 20);
          svg.getElementById("party-bar-" + index).setAttribute("y", 830 - result * 20);
          svg.getElementById("party-bar-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("party-bar-last-" + index).setAttribute("height", last_results[name] * 20);
          svg.getElementById("party-bar-last-" + index).setAttribute("y", 830 - last_results[name] * 20);
          svg.getElementById("party-bar-last-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("percentage-" + index).firstChild.nodeValue = result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-" + index).setAttribute("y", 815 - result * 20);
          svg.getElementById("percentage-last-" + index).firstChild.nodeValue = last_results[name].toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-last-" + index).setAttribute("y", 815 - last_results[name] * 20);
          if (last_results[name] < result) {
            var last_result_x = parseInt(svg.getElementById("percentage-last-" + index).getAttribute("x"));
            svg.getElementById("percentage-last-" + index).setAttribute("x", last_result_x + 20);
          }
        }
