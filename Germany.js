        function getResults() {
          var results = {};
          //
          // *******************************************************************
          //
          // Fill in the percentage, or set to a negative number if the party
          // was absent in the poll:
          //
          results["CDU/CSU"] = 31;
          results["CDU"] = -1;
          results["CSU"] = -1;
          results["SPD"] = 17;
          results["AfD"] = 15;
          results["GRÜNE"] = 14;
          results["LINKE"] = 10;
          results["FDP"] = 8;
          //
          // *******************************************************************
          //
          return results;
        }
        function getLastResults() {
          var last_results = {};
          last_results["CDU/CSU"] = 33.0;
          last_results["CDU"] = 26.8;
          last_results["SPD"] = 20.5;
          last_results["AfD"] = 12.6;
          last_results["FDP"] = 10.7;
          last_results["LINKE"] = 9.2;
          last_results["GRÜNE"] = 8.9;
          last_results["CSU"] = 6.2;
          return last_results;
        }
        function getEpGroupMapping() {
          var ep_group_mapping = {};
          ep_group_mapping["AfD"] = "EFDD";
          ep_group_mapping["CDU"] = "EPP";
          ep_group_mapping["CDU/CSU"] = "EPP";
          ep_group_mapping["CSU"] = "EPP";
          ep_group_mapping["FDP"] = "ALDE";
          ep_group_mapping["GRÜNE"] = "Greens/EFA";
          ep_group_mapping["LINKE"] = "GUE/NGL";
          ep_group_mapping["SPD"] = "S&D";
          return ep_group_mapping;
        }
