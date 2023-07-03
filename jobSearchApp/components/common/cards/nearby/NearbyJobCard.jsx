import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils'

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleNavigate}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo : 'https://github-production-user-asset-6210df.s3.amazonaws.com/57832437/244931788-c402c833-3032-4440-8e0d-672256edc9bf.png'
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>
        <Text style={styles.jobType}>{job.job_city}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard