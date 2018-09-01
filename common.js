				function setData(e) {
					var svg = e.target.ownerDocument;
					setTitle(svg);
          fillChart(svg);
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
