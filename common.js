				function setData(e) {
					var svg = e.target.ownerDocument;
					setTitle(svg);
          var results = getResults();
          var last_results = getLastResults();
          var ep_group_mapping = getEpGroupMapping();
          //
          // *******************************************************************
          //
          // Set the number of decimals behing the point, either 0 or 1:
          //   E.g. setting it to 1 will round to 12.3%
          //        setting it to 0 will round to 12%
          //
          var no_of_decimals = 0;
          //
          // *******************************************************************
          //
          drawChart(svg, results, last_results, ep_group_mapping,
                    no_of_decimals);
				}
        function drawChart(svg, results, last_results, ep_group_mapping,
                           no_of_decimals) {
          var colors = getEpGroupColors();
          var all_parties = Object.keys(results);
          var parties = [];
          for (var i = 0; i < all_parties.length; i++) {
            var party = all_parties[i];
            if (results[party] >= 0) {
              parties.push(party);
            }
          }
          parties.sort(function (a, b) {
            return results[b] - results[a];
          });
          var no_of_parties = parties.length;
          var result_values = [];
          var max_value = 0.0;
          for (var i = 0; i < no_of_parties; i++) {
            var party = parties[i];
            if (results[party] > max_value) {
              max_value = results[party];
            }
            if (last_results[party] > max_value) {
              max_value = last_results[party];
            }
          }
          for (var i = 0; i < no_of_parties; i++) {
            var party = parties[i];
            var ep_group = ep_group_mapping[party];
            drawBar(svg, no_of_decimals, max_value, (i + 1).toFixed(0), party,
                    results[party], last_results[party], ep_group,
                    colors[ep_group]);
          }
        }
        function drawBar(svg, no_of_decimals, max_value, index, name, result,
                         last_result, ep_group, color) {
          svg.getElementById("party-name-" + index).firstChild.nodeValue = name;
          svg.getElementById("ep-group-name-" + index).firstChild.nodeValue = ep_group;
          svg.getElementById("party-bar-" + index).setAttribute("height", barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("y", 830 - barHeight(result, max_value));
          svg.getElementById("party-bar-" + index).setAttribute("fill", color);
          svg.getElementById("party-bar-last-" + index).setAttribute("height", barHeight(last_result, max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("y", 830 - barHeight(last_result, max_value));
          svg.getElementById("party-bar-last-" + index).setAttribute("fill", color);
          svg.getElementById("percentage-" + index).firstChild.nodeValue = result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-" + index).setAttribute("y", 815 - barHeight(result, max_value));
          svg.getElementById("percentage-last-" + index).firstChild.nodeValue = last_result.toFixed(no_of_decimals) + "%";
          svg.getElementById("percentage-last-" + index).setAttribute("y", 815 - barHeight(last_result, max_value));
          if (last_result < result) {
            var last_result_x = parseInt(svg.getElementById("percentage-last-" + index).getAttribute("x"));
            svg.getElementById("percentage-last-" + index).setAttribute("x", last_result_x + 20);
          }
        }
        function barHeight(value, max_value) {
          return value * 20 * 25 / max_value;
        }
        function getEpGroupColors() {
          var colors = {};
          colors["*"] = "#777777";
          colors["ALDE"] = "#FFD700";
          colors["ECR"] = "#0000FF";
          colors["EFDD"] = "#24B9B9";
          colors["ENF"] = "#2B3856";
          colors["EPP"] = "#3399FF";
          colors["Greens/EFA"] = "#009900";
          colors["GUE/NGL"] = "#990000";
          colors["NI"] = "#999999";
          colors["S&D"] = "#FF0000";
          return colors;
        }
				function setTitle(svg) {
          //
          // *******************************************************************
          //
          // Fill in the name of the polling firm:
          //
					var polling_firm = "Polling Firm Name";
          //
          // Fill in the fieldwork period, or use N/A if not available:
          //
					var fieldwork_period = "8–15 August 2018";
          //
          // Fill in the sample size, or use N/A if not available:
          //
					var sample_size = "1,234";
          //
          // *******************************************************************
          //
					t = polling_firm + (fieldwork_period == "N/A" ? "" : (" · " + fieldwork_period)) +  (sample_size == "N/A" ? "" : (" · " + sample_size + " respondents"));
					svg.getElementById("title").firstChild.nodeValue = t;
				}
