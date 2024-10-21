# Load necessary library
library(dplyr)

# Read the CSV file
# Downloaded from: https://pubsonline.informs.org/doi/suppl/10.1287/mnsc.2015.2417
data <- read.csv("/Users/yanholtz/Downloads/mnsc/mnsc.2015.2417-SM-data-full_split_sample/full_split_sample.csv", stringsAsFactors = FALSE)
summary(data)

# Filter for male and select the clocktime column
male_clocktimes <- data %>%
  filter(gender == "M" & !is.na(clocktime)) %>%
  #head(300000) %>%
  select(clocktime) %>%
  pull() 
length(male_clocktimes)

hist(male_clocktimes, breaks=1000)

# Format the output as a JavaScript array
js_array <- paste0("export const data = [", paste(male_clocktimes, collapse = ", "), "];")

# Write to a text file
writeLines(js_array, "~/Desktop/react-graph-gallery/viz/HistogramSliderBinSize/data.ts")

