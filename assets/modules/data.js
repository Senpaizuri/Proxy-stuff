const data = {
    req:(url)=>{
        console.log('--Getting data--')
        return new Promise(resolve => {
            fetch(url)
            .then(res => res.json())
            .then(response => resolve(response))
            .catch(err => console.log('--ERROR--', err))
        })
    },
    clean:{
        user:(data)=>{
            console.log('--Cleaning data--')
            data = data[0]
            return {
                userName: data.username,
                userID: data.user_id,
                count50: Number(data.count50),
                count100: Number(data.count100),
                count300: Number(data.count300),
                rank:{
                    a: Number(data.count_rank_a),
                    s: Number(data.count_rank_sh),
                    sh: Number(data.count_rank_sh),
                    ss: Number(data.count_rank_ss),
                    ssh: Number(data.count_rank_ssh),
                },
                country: data.country,
                since: new Date(data.join_date),
                level: Number(data.level),
                playCount: {
                    games: Number(data.playcount),
                    seconds: Number(data.total_seconds_played)
                },  
                score:{
                    total: Number(data.total_score),
                    ranked: Number(data.ranked_score),
                }
            }
        }
    }
}

export {data}