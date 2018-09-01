				function setData(e) {
					var svg = e.target.ownerDocument;
					setTitle(svg);
          fillChart(svg);
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
