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
          fillParty(svg, no_of_decimals, "1", "SDPS", 34);
          fillParty(svg, no_of_decimals, "2", "ZZS", 19);
          fillParty(svg, no_of_decimals, "3", "NA", 11);
          fillParty(svg, no_of_decimals, "4", "KPV LV", 11);
          fillParty(svg, no_of_decimals, "5", "Att/PAR", 7);
          fillParty(svg, no_of_decimals, "6", "JKP", 6);
          fillParty(svg, no_of_decimals, "7", "V", 5);
          fillParty(svg, no_of_decimals, "8", "LRA", 2);
          fillParty(svg, no_of_decimals, "9", "NSL", 3);
          fillParty(svg, no_of_decimals, "10", "LKS", 1);
          fillParty(svg, no_of_decimals, "11", "Progr", 1);
          fillParty(svg, no_of_decimals, "12", "SKG", 1);
          fillParty(svg, no_of_decimals, "13", "PA", 1);
          //
          // *******************************************************************
          //
        }
        function fillParty(svg, no_of_decimals, index, name, result) {
          var ep_groups = {};
          ep_groups["Att/PAR"] = "*";
          ep_groups["JKP"] = "ECR";
          ep_groups["KPV LV"] = "*";
          ep_groups["LKS"] = "Greens/EFA";
          ep_groups["LRA"] = "ALDE";
          ep_groups["NA"] = "ECR";
          ep_groups["NSL"] = "*";
          ep_groups["Progr"] = "*";
          ep_groups["PA"] = "*";
          ep_groups["SDPS"] = "S&D";
          ep_groups["SKG"] = "*";
          ep_groups["V"] = "EPP";
          ep_groups["ZZS"] = "ALDE";
          var last_results = {};
          last_results["Att/PAR"] = 0;
          last_results["JKP"] = 0;
          last_results["KPV LV"] = 0;
          last_results["LKS"] = 1.6;
          last_results["LRA"] = 6.7;
          last_results["NA"] = 16.6;
          last_results["NSL"] = 6.9;
          last_results["Progr"] = 0;
          last_results["PA"] = 0;
          last_results["SDPS"] = 23.0;
          last_results["SKG"] = 0;
          last_results["V"] = 21.9;
          last_results["ZZS"] = 19.7;
          var colors = getEpGroupColors();
          var max_value = 24.0;
          svg.getElementById("party-name-" + index).firstChild.nodeValue = name;
          svg.getElementById("ep-group-name-" + index).firstChild.nodeValue = ep_groups[name];
          svg.getElementById("party-bar-" + index).setAttribute("height", barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("y", 830 - barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("party-bar-last-" + index).setAttribute("height", barHeight(last_results[name], max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("y", 830 - barHeight(last_results[name], max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("fill", colors[ep_groups[name]]);
          svg.getElementById("percentage-" + index).firstChild.nodeValue = result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-" + index).setAttribute("y", 815 - barHeight(result, max_value));
          svg.getElementById("percentage-last-" + index).firstChild.nodeValue = last_results[name].toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-last-" + index).setAttribute("y", 815 - barHeight(last_results[name], max_value));
          if (last_results[name] < result) {
            var last_result_x = parseInt(svg.getElementById("percentage-last-" + index).getAttribute("x"));
            svg.getElementById("percentage-last-" + index).setAttribute("x", last_result_x + 20);
          }
        }
