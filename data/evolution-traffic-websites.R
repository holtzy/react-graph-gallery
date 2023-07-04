
# Folder with all files
setwd('/Users/yan.holtz/Desktop/trafficTechWebsites')

# Required Libraries
library(tidyverse)

# List of files in the repo
fileNames <- list.files()
numberOfFiles <- length(fileNames)

# Initialize the dataset with the first files
data = read_csv(fileNames[1])
colnames(data)[2] = gsub(".csv", "", fileNames[1])

# Add all csv file to the dataset one by one
for (i in c(2:numberOfFiles)) {
  name = fileNames[i]
  currentData <- read_csv(name)
  colnames(currentData)[2] = gsub(".csv", "", name)
  data = merge(data, currentData, all=T, by = 'Date')
}

head(data)
#dim(data)
#summary(data)

# Switch to long format to be able to use with ggplot2
tidyData = data %>% 
  pivot_longer(cols = -Date, names_to = "Website", values_to = "PageViews")
tidyData

# Plot Day per Day Since 2015
tidyData %>% 
  ggplot(aes(x=Date, y=PageViews, fill=Website)) + 
    geom_line() +
    facet_wrap(~Website, scales = 'free')

# Plot Day per Day Since 2022
tidyData %>% 
  filter(Date > '2022-09-01')  %>% 
  ggplot(aes(x=Date, y=PageViews, fill=Website)) + 
  geom_line() +
  facet_wrap(~Website, scales = 'free') +
  geom_vline(xintercept = as.Date("2022-11-01"), linetype = "dashed", color = "red")


# Aggregate per month?
monthData <- tidyData %>% 
  group_by(month = floor_date(Date, 'month'), Website) %>%
  summarise(MonthViews = sum(PageViews))
monthData

# Plot Month per Month
monthData %>% 
  ungroup() %>%
  ggplot(aes(x=month, y=MonthViews, fill=Website)) + 
    geom_line() +
    facet_wrap(~Website, scales = 'free') +
    geom_vline(xintercept = as.Date("2022-11-01"), linetype = "dashed", color = "red")


# Plot Month per Month Since 2022
monthData %>% 
  ungroup() %>%
  filter(month > '2021-09-01')  %>% 
  filter(month < '2023-05-01')  %>% 
  ggplot(aes(x=month, y=MonthViews, fill=Website)) + 
    geom_line() +
    facet_wrap(~Website, scales = 'free')  +
    geom_vline(xintercept = as.Date("2022-11-01"), linetype = "dashed", color = "red")


# Export in CSV
csvData = monthData %>% 
  filter(month < '2023-05-01')  %>% tail()
  rename(group = Website)  %>% 
  rename(value = MonthViews) %>%  
  rename(date = month)
write_delim(
  csvData, 
  delim = ',',
  file = '/Users/yan.holtz/Desktop/react-graph-gallery/data/data_page_views.csv'
  )

  
