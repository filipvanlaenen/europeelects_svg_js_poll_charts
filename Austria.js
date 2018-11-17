        function getResults() {
          var results = {};
          //
          // *******************************************************************
          //
          // Fill in the percentage, or set to a negative number if the party
          // was absent in the poll:
          //
          results["ÖVP"] = 33;
          results["SPÖ"] = 26;
          results["FPÖ"] = 23;
          results["NEOS"] = 8;
          results["PILZ"] = 3;
          results["GRÜNE"] = 3;
          //
          // *******************************************************************
          //
          return results;
        }
        function getLastResults() {
          var last_results = {};
          last_results["ÖVP"] = 31.4;
          last_results["SPÖ"] = 26.9;
          last_results["FPÖ"] = 26.0;
          last_results["NEOS"] = 5.3;
          last_results["PILZ"] = 4.4;
          last_results["GRÜNE"] = 3.8;
          return last_results;
        }
        function getEpGroupMapping() {
          var ep_group_mapping = {};
          ep_group_mapping["FPÖ"] = "ENF";
          ep_group_mapping["GRÜNE"] = "Greens/EFA";
          ep_group_mapping["NEOS"] = "ALDE";
          ep_group_mapping["ÖVP"] = "EPP";
          ep_group_mapping["PILZ"] = "*";
          ep_group_mapping["SPÖ"] = "S&D";
          return ep_group_mapping;
        }
